import React from 'react';

interface Paper {
  id: string;
  title: string;
  author: string;
  year: string;
  keywords: string;
  citations: number;
}

interface PaperListProps {
  papers: Paper[];
}

const PaperList: React.FC<PaperListProps> = ({ papers }) => (
  <div>
    {papers.map(paper => (
      <div key={paper.id} style={{ marginBottom: 24, padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
        <h4 style={{ margin: 0 }}>
          <a
            href={`https://www.semanticscholar.org/paper/${paper.id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1976d2', textDecoration: 'none' }}
          >
            {paper.title}
          </a>
        </h4>
        <p style={{ margin: '8px 0 0 0' }}>Author: {paper.author}</p>
        <p style={{ margin: '4px 0 0 0' }}>Year: {paper.year}</p>
        <p style={{ margin: '4px 0 0 0' }}>Keywords: {paper.keywords}</p>
        <p style={{ margin: '4px 0 0 0' }}>Citations: {paper.citations}</p>
      </div>
    ))}
  </div>
);

export default PaperList;