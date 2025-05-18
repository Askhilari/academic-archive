// Define the Paper interface here if './types' does not exist
export interface Paper {
    id: string;
    title: string;
    author: string;
    year: string;
    keywords: string[];
    citations: number;
}

export interface Filter {
    yearRange: [number, number];
    author: string;
    keywords: string[];
}

export interface SortOption {
    label: string;
    value: 'asc' | 'desc';
}

// Example data definition; replace with actual data source as needed
const data = { data: [] as any[] };

const mappedPapers: Paper[] = (data.data || []).map((item: any) => ({
  id: String(item.paperId), // Ensure id is a string
  title: item.title,
  author: item.authors && item.authors.length > 0 ? item.authors.map((a: any) => a.name).join(', ') : 'Unknown',
  year: item.year ? item.year.toString() : '',
  keywords: item.keywords || [],
  citations: item.citationCount || 0,
}));