import { useEffect } from "react";
import './HomeView.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import Admin from "../../Components/Admin/Admin";
import Footer from "../../Components/Footer/Footer";
import { Box, Image, Text } from "@chakra-ui/react";
export default function HomeView() {

  return (

    <main>
      <Box height='31.25rem' position='relative'>
        <Image className="home-image" src='https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mMPHDgfZvrPt5P1TKIUgGHMBSkCb96lRxl9nusHwvXXh--Zn2haDuqA0f2RmD-ZU1f9cqSI7VxfjfQX3HkZ2f7f-32UwNyC3OSAGbWw7haLRnnOVzgJ3H57aTiOZPgHiO9O-YNFgy624PuIcQzuUWSjUB~9yB2XMWkmAjNjmMXKjI6s1H~oPO6yGLH8Ez5Xb-QdfLDanTIgxIMMJQVQNfh9PEjKTH87SZIvinYGwCYIb3pglr~Ks8-v9AycXze5xElqoyraOtFAH-tJ-~bwqvud1uDQHva8KwR69OOD0Y8OP20JkGSM4Hm8TA9nbUA70~WELHSXCMVs5kgX3T4su6g__'/>
        <Box className='text-box'  height='70%'>
          <Text fontWeight='medium' padding='5.25rem 3.5rem' fontSize='1.2rem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</Text>
        </Box>
      </Box>
    </main>
  );
}
