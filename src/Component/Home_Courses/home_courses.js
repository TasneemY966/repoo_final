// // import React, { useEffect, useState } from "react";
// // import "./home_courses.css";
// // import { Row, Col} from "react-bootstrap";
// // import image from "../../Assets/home_courses/Profile.png";
// // import StartedCourses from "./started_courses";
// // import PopularCourses from "./popular_courses ";
// // import SkillCourses from "./skills_courses";
// // import { Link } from "react-router-dom";
// // import Navbars from "../Navbar/Navbar";
// // // import {useEffect, useState} from "react";


// // const HomeCourses = () => {

// //   const api_url = "https://fakestoreapi.com/products/category/jewelery"
// //   const api_url2 = "https://fakestoreapi.com/products/category/electronics"
// //   const api_url3 = "https://fakestoreapi.com/products/category/men's clothing"
// //   const [products, setProducts] = useState([]);
// //   const [popularcourse, setPopularcourse] = useState([]);
// //   const [skilcourse, setSkillcourse] = useState([]);
// //   const getstartedcourse = () => {
// //     fetch(api_url)
// //       .then((res) => res.json())
// //       .then((data) => setProducts(data));

// //   }
// //   const getPopularcourse = () => {
// //     fetch(api_url2)
// //       .then((res) => res.json())
// //       .then((data) => setPopularcourse(data));

// //   }
// //   const getSkillcourse = () => {
// //     fetch(api_url3)
// //       .then((res) => res.json())
// //       .then((data) => setSkillcourse(data));

// //   }
// //   useEffect(() => {
// //     getstartedcourse();
// //     getPopularcourse();
// //     getSkillcourse();

// //   }, []);
// //   // const startedCourses = [
// //   //   {
// //   //     title: "OOP C++",
// //   //     instructor: "Instructor name",
// //   //     skills: ["Intermediate"],
// //   //     image: "https://via.placeholder.com/120",
// //   //   },
// //   //   {
// //   //     title: "Introduction for Generative AI",
// //   //     instructor: "Instructor name",
// //   //     skills: ["Beginner"],
// //   //     image: "https://via.placeholder.com/120",
// //   //   },
// //   // ];

// //   return (

// //     <>
// //       <Navbars/>
// //       <Row className="m-auto links_pages">
// //         <Col className="link_home"><Link to="/home-course" id="link_home" >Home</Link></Col>
// //         <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
// //         <Col className="link_learning"><Link to="/My-learning" id="link_learning">My learning</Link> </Col>
// //         <Col className="link_learning"><Link to="/Leaderboard" id="link_learning">Leaderboard</Link> </Col>
// //       </Row>
// //       <Row>
// //         <h4 id="started_courses">Get Started with These Courses</h4>
// //       </Row>
// //       <Row >
// //         {products.map((product) => {
// //           return (
// //             <Col md={3} key={product.id}>
// //               <StartedCourses product={product} />
// //             </Col>
// //           );
// //         })}
// //       </Row>

// //       <Row>
// //         <h4 id="started_courses">Most Popular Courses</h4>
// //       </Row>
// //       <Row >
// //         {popularcourse.map((product) => {
// //           return (
// //             <Col md={3} key={product.id}>
// //               <PopularCourses product={product} />
// //             </Col>

// //           );
// //         })}
// //       </Row>
// //       <Row>
// //         <h4 id="started_courses">Grow Your Skill Set</h4>
// //       </Row>
// //       <Row >
// //         {skilcourse.map((product) => {
// //           return (
// //             <Col md={3} key={product.id}>
// //               <SkillCourses product={product} />
// //             </Col>

// //           );
// //         })}
// //       </Row>
// //     </>
// //   );
// // }
// // export default HomeCourses;

// import React, { useEffect, useState } from "react";
// import "./home_courses.css";
// import { Row, Col } from "react-bootstrap";
// import image from "../../Assets/home_courses/Profile.png";
// import StartedCourses from "./started_courses";
// import PopularCourses from "./popular_courses ";
// import SkillCourses from "./skills_courses";
// import { Link } from "react-router-dom";
// import Navbars from "../Navbar/Navbar";
// import axios from "axios";

// const HomeCourses = () => {
//   const api_url = "https://fakestoreapi.com/products/category/jewelery";
//   const api_url2 = "https://fakestoreapi.com/products/category/electronics";
//   const api_url3 = "https://fakestoreapi.com/products/category/men's clothing";
//   const [products, setProducts] = useState([]);
//   const [popularcourse, setPopularcourse] = useState([]);
//   const [skilcourse, setSkillcourse] = useState([]);

//   const getstartedcourse = () => {
//     axios.get(api_url)
//       .then((response) => setProducts(response.data));
//   };

//   const getPopularcourse = () => {
//     axios.get(api_url2)
//       .then((response) => setPopularcourse(response.data));
//   };

//   const getSkillcourse = () => {
//     axios.get(api_url3)
//       .then((response) => setSkillcourse(response.data));
//   };

//   useEffect(() => {
//     getstartedcourse();
//     getPopularcourse();
//     getSkillcourse();
//   }, []);

//   return (
//     <>
//       <Navbars />
//       <Row className="m-auto links_pages">
//         <Col className="link_home"><Link to="/home-course" id="link_home">Home</Link></Col>
//         <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
//         <Col className="link_learning"><Link to="/My-learning" id="link_learning">My learning</Link> </Col>
//         <Col className="link_learning"><Link to="/Leaderboard" id="link_learning">Leaderboard</Link> </Col>
//       </Row>
//       <Row>
//         <h4 id="started_courses">Get Started with These Courses</h4>
//       </Row>
//       <Row>
//         {products.map((product) => {
//           return (
//             <Col md={3} key={product.id}>
//               <Link to={`/course-details/${product.id}`}>
//                 <StartedCourses product={product} />
//               </Link>
//             </Col>
//           );
//         })}
//       </Row>

//       <Row>
//         <h4 id="started_courses">Most Popular Courses</h4>
//       </Row>
//       <Row>
//         {popularcourse.map((product) => {
//           return (
//             <Col md={3} key={product.id}>
//               <Link to={`/course-details/${product.id}`}>
//                 <PopularCourses product={product} />
//               </Link>
//             </Col>
//           );
//         })}
//       </Row>
//       <Row>
//         <h4 id="started_courses">Grow Your Skill Set</h4>
//       </Row>
//       <Row>
//         {skilcourse.map((product) => {
//           return (
//             <Col md={3} key={product.id}>
//               <Link to={`/course-details/${product.id}`}>
//                 <SkillCourses product={product} />
//               </Link>
//             </Col>
//           );
//         })}
//       </Row>
//     </>
//   );
// };

// export default HomeCourses;
// import React, { useEffect, useState } from "react";
// import "./home_courses.css";
// import { Row, Col } from "react-bootstrap";
// import StartedCourses from "./started_courses";
// import PopularCourses from "./popular_courses ";
// import SkillCourses from "./skills_courses";
// import { Link } from "react-router-dom";
// import Navbars from "../Navbar/Navbar";
// import axios from "axios";

// const HomeCourses = () => {
//   const [startedCourses, setStartedCourses] = useState([]);
//   const [popularCourses, setPopularCourses] = useState([]);
//   const [skillCourses, setSkillCourses] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://localhost:7217/api/courses", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const allCourses = response.data.data;
//         setStartedCourses(allCourses.slice(0, 4));
//         setPopularCourses(allCourses.slice(4, 8));
//         setSkillCourses(allCourses.slice(8, 12));
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, [token]);

//   return (
//     <>
//       <Navbars />
//       <Row className="m-auto links_pages">
//         <Col className="link_home"><Link to="/home-course" id="link_home">Home</Link></Col>
//         <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
//         <Col className="link_learning"><Link to="/My-learning" id="link_learning">My learning</Link> </Col>
//         <Col className="link_learning"><Link to="/Leaderboard" id="link_learning">Leaderboard</Link> </Col>
//       </Row>

//       <Row><h4 id="started_courses">Get Started with These Courses</h4></Row>
//       <Row>
//         {startedCourses.map((course) => (
//           <Col md={3} key={course.id}>
//             <Link to={`/course/${course.id}`}>
//               <StartedCourses product={course} />
//             </Link>
//           </Col>
//         ))}
//       </Row>

//       <Row><h4 id="started_courses">Most Popular Courses</h4></Row>
//       <Row>
//         {popularCourses.map((course) => (
//           <Col md={3} key={course.id}>
//             <Link to={`/course/${course.id}`}>
//               <PopularCourses product={course} />
//             </Link>
//           </Col>
//         ))}
//       </Row>

//       <Row><h4 id="started_courses">Grow Your Skill Set</h4></Row>
//       <Row>
//         {skillCourses.map((course) => (
//           <Col md={3} key={course.id}>
//             <Link to={`/course/${course.id}`}>
//               <SkillCourses product={course} />
//             </Link>
//           </Col>
//         ))}
//       </Row>
//     </>
//   );
// };

// export default HomeCourses;
import React, { useEffect, useState } from "react";
import "./home_courses.css";
import { Row, Col } from "react-bootstrap";
import StartedCourses from "./started_courses";
import PopularCourses from "./popular_courses ";
import SkillCourses from "./skills_courses";
import { Link, useNavigate } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
import axios from "axios";

const HomeCourses = () => {
  const [startedCourses, setStartedCourses] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [skillCourses, setSkillCourses] = useState([]);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !role) {
      navigate("/login");
      return;
    }

    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://localhost:7217/api/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allCourses = response.data.data;
        setStartedCourses(allCourses.slice(0, 4));
        setPopularCourses(allCourses.slice(4, 8));
        setSkillCourses(allCourses.slice(8, 12));
      } catch (error) {
        console.error("Error fetching courses:", error);
        if (error.response?.status === 401) {
          navigate("/login");
        }
      }
    };

    fetchCourses();
  }, [token, role, navigate]);

  if (!token || !role) return null;

  return (
    <>
      <Navbars />
      <Row className="m-auto links_pages">
        <Col className="link_home"><Link to="/home-course" id="link_home">Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
        <Col className="link_learning"><Link to="/My-learning" id="link_learning">My learning</Link> </Col>
        <Col className="link_learning"><Link to="/Leaderboard" id="link_learning">Leaderboard</Link> </Col>
      </Row>

      <Row><h4 id="started_courses">Get Started with These Courses</h4></Row>
      <Row>
        {startedCourses.map((course) => (
          <Col md={3} key={course.id}>
            <Link to={`/course/${course.id}`}>
              <StartedCourses product={course} />
            </Link>
          </Col>
        ))}
      </Row>

      <Row><h4 id="started_courses">Most Popular Courses</h4></Row>
      <Row>
        {popularCourses.map((course) => (
          <Col md={3} key={course.id}>
            <Link to={`/course/${course.id}`}>
              <PopularCourses product={course} />
            </Link>
          </Col>
        ))}
      </Row>

      <Row><h4 id="started_courses">Grow Your Skill Set</h4></Row>
      <Row>
        {skillCourses.map((course) => (
          <Col md={3} key={course.id}>
            <Link to={`/course/${course.id}`}>
              <SkillCourses product={course} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeCourses;