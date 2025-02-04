import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';

const B2bSearch = () => {
  return (
    <Box m="20px">
      <Header title="B2B SEARCH" subtitle="Find the Best Deals for Your Business" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '30px',
          alignItems: 'start',
          margin: '20px 0',
          backgroundColor: '#ddd',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '15px',
            marginBottom: '20px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="scope" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Search Scope</label>
            <select id="scope" style={{ padding: '12px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '16px', transition: 'all 0.3s ease-in-out' }}>
              <option>Local</option>
              <option>Global</option>
            </select>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="quantity" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Quantity</label>
            <input id="quantity" type="number" placeholder="Enter quantity" 
              style={{ width: '98%', padding: '12px 15px', fontSize: '16px', border: '2px solid #ccc', borderRadius: '8px', transition: 'all 0.3s ease-in-out', outline: 'none' }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="industry" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Industry</label>
            <select id="industry" style={{ padding: '12px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '16px', transition: 'all 0.3s ease-in-out' }}>
              <option>All Industries</option>
            </select>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="rating" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Rating</label>
            <select id="rating" style={{ padding: '12px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '16px', transition: 'all 0.3s ease-in-out' }}>
              <option>Any Rating</option>
            </select>
          </Box>
        </Box>
        <button style={{ width: '98%', background: '#007bff', color: 'white', fontSize: '16px', fontWeight: 'bold', padding: '12px', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s ease-in-out' }}>Set filters</button>
      </Box>
    </Box>
  );
};

export default B2bSearch;