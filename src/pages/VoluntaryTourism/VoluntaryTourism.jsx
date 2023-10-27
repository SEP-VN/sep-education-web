import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import ta_lai_tour from "../../assets/images/voluntary_tourism/ta_lai_tour.png";




const tours = [
  {
    image: ta_lai_tour,
    name:"DU LỊCH TÌNH NGUYỆN LÀNG TÀ LÀI",
    description:" Du lịch tình nguyện tại làng Tà Lài nhằm hỗ trợ phát triển giáo dục, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương,..."
  },
  // {
  //   image: "https://dulichmedia.dalat.vn/Images/DNI/superadminportal.dni/Tin%20t%E1%BB%A9c/N%C4%83m2021/Th%C3%A1ng3/42talai4_637523557206278207.jpg",
  //   name:"DU LỊCH TÌNH NGUYỆN LÀNG TÀ LÀI",
  //   description:" Du lịch tình nguyện tại làng Tà Lài nhằm hỗ trợ phát triển giáo dục, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác."
  // },
  // {
  //   image: "https://oms.hotdeal.vn/images/editors/sources/000333275524/333275-333275-body%20(10).jpg",
  //   name:"DU LỊCH TÌNH NGUYỆN LÀNG TÀ LÀI",
  //   description:" Du lịch tình nguyện tại làng Tà Lài nhằm hỗ trợ phát triển giáo dục, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác."
  // },
  // {
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpQYycaUu1vqgIF-z8KnGguDE9BwGcPdAqg&usqp=CAU",
  //   name:"DU LỊCH TÌNH NGUYỆN LÀNG TÀ LÀI",
  //   description:" Du lịch tình nguyện tại làng Tà Lài nhằm hỗ trợ phát triển giáo dục, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác."
  // },
]



const VoluntaryTourism = () => {
  return (
    
    <main>
      <Container sx={{ py: 8, width: '90%' }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {tours.map((tour) => (
            <Grid item key={tour} xs={12} sm={6} md={4}>
              <Link to="/tour-detail"> {/* Add your route here */}
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={tour.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                    <span style={{ color: "#007ba9" }}>{tour.name}</span>
                    </Typography>
                    <Typography>
                      {tour.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', padding: 2 }}>
                    <Button
                      size="large"
                      sx={{
                        width: '60%',
                        backgroundColor: '#ffb03b',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#ffa012',
                        },
                      }}
                    >
                      Xem chi tiết
                      <table></table>
                    </Button>
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

export default VoluntaryTourism;