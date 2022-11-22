import React from 'react';
import { Stack } from '@mui/material';
import { Store } from '../utils/store';
import { useContext, useEffect } from 'react';

//import { categories } from '../utils/constants';
import { useFetch } from '../hooks/useFetch';

const Categories = ({ selectedCategory, setSelectedCategory }: any) => {
  let {
    dispatch,
    state: { categories, categoryId },
  }: any = useContext(Store);

  const { data, isLoading, isError, error } = useFetch('/categories');

  categories = data?.data.categories;

  const handleCategoryClicked = (categoryName: any, idCategory: any) => {
    categoryId = idCategory;
    setSelectedCategory(categoryName);
    dispatch({ type: 'CATEGORY_CLICKED', payload: categoryId });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error instanceof Error && error.message}</h2>;
  }

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category: any) => (
        <button
          className="category-btn"
          onClick={() => handleCategoryClicked(category.name, category._id)}
          style={{
            background: category.name === selectedCategory ? '#2F80ED' : '',
            color: 'white',
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? 'white' : '#2F80ED',
              marginRight: '15px',
            }}
          >
            {/* {category.icon} */}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8',
              color: category.name === selectedCategory ? 'white' : 'black',
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Categories;
