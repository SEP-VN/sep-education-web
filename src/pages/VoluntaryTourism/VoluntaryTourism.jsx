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




const tours = [
  {
    image: "https://diachiamthuc.vn/wp-content/uploads/2021/06/Tong-hop-kinh-nghiem-du-lich-Bao-Loc.jpg",
    name:"DU LỊCH TÌNH NGUYỆN BẢO LỘC – LÂM ĐỒNG",
    description:" Du lịch tình nguyện tại Bảo Lộc – Lâm Đồng nhằm hỗ trợ, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác."
  },
  {
    image: "https://diachiamthuc.vn/wp-content/uploads/2021/06/Tong-hop-kinh-nghiem-du-lich-Bao-Loc.jpg",
    name:"DU LỊCH TÌNH NGUYỆN BẢO LỘC – LÂM ĐỒNG",
    description:" Du lịch tình nguyện tại Bảo Lộc – Lâm Đồng nhằm hỗ trợ, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác."
  },
  {
    image: "https://diachiamthuc.vn/wp-content/uploads/2021/06/Tong-hop-kinh-nghiem-du-lich-Bao-Loc.jpg",
    name:"DU LỊCH TÌNH NGUYỆN BẢO LỘC – LÂM ĐỒNG",
    description:" Du lịch tình nguyện tại Bảo Lộc – Lâm Đồng nhằm hỗ trợ, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác."
  },
  {
    image: "https://diachiamthuc.vn/wp-content/uploads/2021/06/Tong-hop-kinh-nghiem-du-lich-Bao-Loc.jpg",
    name:"DU LỊCH TÌNH NGUYỆN BẢO LỘC – LÂM ĐỒNG",
    description:" Du lịch tình nguyện tại Bảo Lộc – Lâm Đồng nhằm hỗ trợ, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác."
  },
]



const VoluntaryTourism = () => {
  return (
    
    <main>
      <Container sx={{ py: 8, width: '70%' }} maxWidth="lg">
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