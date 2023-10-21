import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import "./BlogsStyle.css"




const blogs = [
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir8SJ71eIUnxW9zhcoDjtRDhMQIGp9vUdPS_TmMh1qzzbLwsVrtkRusODm8qMICljYPMdR7lDtXc7p9djZNLbpYo7zd3vu_NJcd1S3CYpviDLXH4Kx5td7CzIk5PAM50pXXGWo7j3haRbZJKoylnp4qrAUXUGLuRM6TOBUofT-KorznY8xVAbF3_jj5A/w668-h254/banner_project.png",
    name:"Giới thiệu về dự án",
    description:"Bài blog đầu tiên để giới thiệu về dự án S.E.P",
    link: "https://sepvn.blogspot.com/2023/10/blog-post.html"
  },
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir8SJ71eIUnxW9zhcoDjtRDhMQIGp9vUdPS_TmMh1qzzbLwsVrtkRusODm8qMICljYPMdR7lDtXc7p9djZNLbpYo7zd3vu_NJcd1S3CYpviDLXH4Kx5td7CzIk5PAM50pXXGWo7j3haRbZJKoylnp4qrAUXUGLuRM6TOBUofT-KorznY8xVAbF3_jj5A/w668-h254/banner_project.png",
    name:"Giới thiệu về dự án",
    description:"Bài blog đầu tiên để giới thiệu về dự án S.E.P",
    link: "https://sepvn.blogspot.com/2023/10/blog-post.html"
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