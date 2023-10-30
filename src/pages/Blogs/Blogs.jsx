import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import gioi_thieu from "../../assets/images/blogs/gioi_thieu.png";
import nong_thon from "../../assets/images/blogs/nong_thon.png";
import ta_lai from "../../assets/images/blogs/ta_lai.png";
import nct from "../../assets/images/blogs/nct.png";
import hoc_sinh_ta_lai from "../../assets/images/blogs/hoc_sinh_ta_lai.png";
import ngoai_khoa from "../../assets/images/blogs/ngoai_khoa.png";


import "./BlogsStyle.css"




const blogs = [
  {
    image: gioi_thieu,
    name:"Sứ mệnh của S.E.P (Share Education Project)",
    description:"S.E.P (Share Education Project) mang trong mình sứ mệnh và mong muốn góp phần giải quyết vấn đề thiếu cân bằng giáo dục giữa thành thị và nông thôn...",
    link: "https://seprojectvietnam.blogspot.com/2023/10/su-menh-cua-sep.html"
  },
  {
    image: nong_thon,
    name:"Thách thức và Cơ hội trong Xây dựng Hệ thống Giáo dục Công Bằng và Hiệu Quả tại Việt Nam",
    description:"Giáo dục là yếu tố quan trọng để xây dựng tương lai của một quốc gia, và hệ thống giáo dục Việt Nam không phải là một ngoại lệ...",
    link: "https://seprojectvietnam.blogspot.com/2023/10/thach-thuc-va-co-hoi-trong-xay-dung-he_26.html"
  },
  {
    image: ta_lai,
    name:"[Đồng Nai] Khám Phá Tà Lài - Thiên Đàng của Văn Hóa và Thiên Nhiên Hoang Sơ",
    description:"Khi bạn tìm kiếm một điểm đến đầy sự kết hợp giữa thiên nhiên hoang sơ và văn hóa độc đáo, Tà Lài, xã nằm sâu trong lòng tỉnh Đồng Nai, chắc chắn sẽ là sự lựa chọn đáng cân nhắc...",
    link: "https://seprojectvietnam.blogspot.com/2023/10/ong-nai-kham-pha-ta-lai-thien-ang-cua.html"
  },
  {
    image: nct,
    name:"[Đồng Nai] Khám Phá Vườn quốc gia Nam Cát Tiên - Hành trình kỳ diệu giữa thiên nhiên và sinh học",
    description:"Vườn quốc gia Nam Cát Tiên - Khu rừng chứa đựng nguồn tài nguyên đa dạng sinh học của Việt Nam. Trải dài trên 3 tỉnh Đồng Nai, Lâm Đồng và Bình Phước với diện tích 71.187,9 ha...",
    link: "https://seprojectvietnam.blogspot.com/2023/10/ong-nai-kham-pha-vuon-quoc-gia-nam-cat.html"
  },
  {
    image: hoc_sinh_ta_lai,
    name:"[Chân dung học sinh của S.E.P] Những Thiên thần tại làng Tà Lài",
    description:"Đến với làng Tà Lài, điều đầu tiên dự án ấn tượng đó chính là những gương mặt ngây thơ, chực chờ nụ cười dành cho những vị khách phương xa của các em nhỏ nơi đây. Những tưởng với sự tích cực như vậy thì các em hẳn không có nhiều mối lo âu...",
    link: "https://seprojectvietnam.blogspot.com/2023/10/chan-dung-hoc-sinh-cua-sep-nhung-thien.html"
  },
  {
    image: ngoai_khoa,
    name:"[Kỹ năng] Vai trò của hoạt động ngoại khóa cho sự phát triển của trẻ",
    description:"Hoạt động ngoại khóa là một trong những mảng hoạt động giáo dục quan trọng trong việc giáo dục học sinh phát triển toàn diện. Tham gia các hoạt động ngoại khóa không chỉ giúp các em tăng cường sức khỏe, giải tỏa mệt mỏi...",
    link: "https://seprojectvietnam.blogspot.com/2023/10/ky-nang-vai-tro-cua-hoat-ong-ngoai-khoa.html"
  }
]



const Blogs = () => {
  return (
    
    <main>
      <Container  sx={{ py: 8, width: '90%' }} maxWidth="lg">
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