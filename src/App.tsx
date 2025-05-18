import React, { useState, useEffect } from 'react';
import PaperList from './components/PaperList';
import Filters from './components/Filters';
import SortByCitations from './components/SortByCitations';
import Tabs from './components/Tabs';

interface Paper {
  id: string;
  title: string;
  author: string;
  year: string;
  keywords: string;
  citations: number;
}

const App: React.FC = () => {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [filters, setFilters] = useState<{ author: string; year: string; keywords: string }>({ author: '', year: '', keywords: '' });
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [searched, setSearched] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // <-- Add loading state

  const fetchPapers = async (filters: { author: string; year: string; keywords: string }) => {
    setLoading(true);

    // Build a more specific query string
    let queryParts: string[] = [];
    if (filters.keywords) queryParts.push(filters.keywords);
    if (filters.author) queryParts.push(`author:${filters.author}`);
    if (filters.year) queryParts.push(`year:${filters.year}`);
    const query = encodeURIComponent(queryParts.join(' ')) || 'machine learning';

    const url = `https://api.semanticscholar.org/graph/v1/paper/search?query=${query}&fields=title,authors,year,citationCount,abstract,paperId&limit=20`;

    const response = await fetch(url);
    const data = await response.json();

    // Debug: log the API response
    console.log('API response:', data);

    const mappedPapers: Paper[] = (data.data || []).map((item: any) => ({
      id: item.paperId ? String(item.paperId) : '',
      title: item.title,
      author: item.authors && item.authors.length > 0 ? item.authors.map((a: any) => a.name).join(', ') : 'Unknown',
      year: item.year ? item.year.toString() : '',
      keywords: filters.keywords,
      citations: item.citationCount || 0,
    }));

    setPapers(mappedPapers);
    setLoading(false);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setSearched(true);
    fetchPapers(newFilters);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  // Sort papers by citations
  const sortedPapers = [...papers].sort((a, b) =>
    sortOrder === 'asc' ? a.citations - b.citations : b.citations - a.citations
  );

  return (
    <div>
      <Tabs tabs={['all', 'favorites', 'recent']} onTabChange={() => {}} />
      <Filters onFilterChange={handleFilterChange} />
      {searched && (
        <>
          <SortByCitations sortOrder={sortOrder} onSortChange={handleSortChange} />
          {loading ? (
            <div style={{ textAlign: 'center', margin: 32, fontSize: 18 }}>Loading...</div>
          ) : (
            <>
              <PaperList papers={sortedPapers} />
              {sortedPapers.length === 0 && <div>No papers found.</div>}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;