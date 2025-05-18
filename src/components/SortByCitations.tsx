import React from 'react';

export interface SortByCitationsProps {
  sortOrder: string;
  onSortChange: (order: string) => void;
}

const SortByCitations: React.FC<SortByCitationsProps> = ({ sortOrder, onSortChange }) => (
  <div>
    <label>
      Sort by Citations:
      <select value={sortOrder} onChange={e => onSortChange(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </label>
  </div>
);

export default SortByCitations;