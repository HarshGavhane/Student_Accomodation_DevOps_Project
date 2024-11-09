import React from 'react';

const SearchResult = ({ results, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching results: {error.message}</p>;
  }

  return (
    <div>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className="search-result-item">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResult;
