// import React from 'react';
import Grid from '@mui/material/Grid';
import CourseCard from './CourseCard';

export default function CourseList() {
  const courses = [
    {
      title: 'Introduction to React',
      description: 'Learn the basics of React.js and build interactive user interfaces.',
    },
    {
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript and learn advanced concepts and techniques.',
    },
    {
      title: 'Web Development Bootcamp',
      description: 'Become a full-stack web developer with this comprehensive bootcamp.',
    },
    {
      title: 'Python for Data Science',
      description: 'Master Python and use it for data analysis and machine learning.',
    },
    {
      title: 'UI/UX Design Principles',
      description: 'Understand the principles of user interface and user experience design.',
    },
  ];

  return (
    <Grid container spacing={3}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CourseCard title={course.title} description={course.description} />
        </Grid>
      ))}
    </Grid>
  );
}
