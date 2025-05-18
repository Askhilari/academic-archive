<<<<<<< HEAD
# CodeliersWebapps
This had 2 ideas that I worked on.
=======
# Academic Archive

This project is an Academic Archive application built with React and TypeScript. It allows users to browse, filter, and sort academic papers based on various criteria, including citation counts. The application features a tabbed interface for easy navigation between different categories of papers.

## Features

- **Paper List**: Displays a list of academic papers with relevant details.
- **Filters**: Provides options to filter papers based on various criteria.
- **Sort by Citations**: Allows users to sort the list of papers by citation count.
- **Tabbed UI**: Enables navigation between different views or categories of papers.

## Project Structure

```
academic-archive
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components          # Contains React components
│   │   ├── PaperList.tsx   # Component to display the list of papers
│   │   ├── Filters.tsx      # Component for filtering papers
│   │   ├── SortByCitations.tsx # Component for sorting papers by citations
│   │   └── Tabs.tsx        # Component for tabbed navigation
│   ├── types               # TypeScript types and interfaces
│   │   └── index.ts        # Type definitions for the application
│   ├── App.tsx             # Main App component
│   └── index.tsx           # Entry point of the React application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd academic-archive
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the filters to narrow down the list of papers based on your criteria.
- Sort the papers by citation count using the sorting options.
- Navigate through different categories of papers using the tabbed interface.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
>>>>>>> 8bf24ef (Building an academic archives for scientific papers using semantic search api. Doing this for hackathon)
