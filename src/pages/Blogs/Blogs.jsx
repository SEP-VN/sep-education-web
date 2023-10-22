import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import bannerProject from "../../assets/images/banner/banner_project.png";

import "./BlogsStyle.css"




const blogs = [
  {
    image: bannerProject,
    name:"Giới thiệu về dự án",
    description:"Bài blog đầu tiên để giới thiệu về dự án S.E.P",
    link: "https://seprojectvietnam.blogspot.com/2023/10/gioi-thieu-ve-sep.html"
  },
  {
    image: bannerProject,
    name:"Giới thiệu về dự án",
    description:"Bài blog đầu tiên để giới thiệu về dự án S.E.P",
    link: "https://seprojectvietnam.blogspot.com/2023/10/gioi-thieu-ve-sep.html"
  },
]



const Blogs = () => {
  return (
    
    <main>
      <Container  sx={{ py: 8, width: '70%' }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item key={blog} xs={12} sm={6} md={4}>
              <Link to={blog.link}> {/* Add your route here */}
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={blog.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    <span style={{ color: "#007ba9" }}>{blog.name}</span>
                    </Typography>
                    <Typography>
                      {blog.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ padding: 2 }}>
                    <a href={blog.link} className="card-link" style={{ color: "#007ba9"}}>Xem thêm</a>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    
  );
}

export default Blogs;