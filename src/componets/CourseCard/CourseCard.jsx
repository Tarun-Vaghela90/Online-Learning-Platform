// import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './CourseCard.css';

export default function CourseCard({ title, description }) {
  return (
    <Card className='CourseCard'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <div className='cardActions' style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined">Enroll</Button>
      </div>
    </Card>
  );
}
