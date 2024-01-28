import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CourseDetailsCard = ({
  course,
  setConfrimationModal,
  handleBuyCourse,
}) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("Instructors can't buy a course");
      return;
    }

    if (token) {
      dispatch(addToCart(course));
      return;
    }

    setConfrimationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfrimationModal(null),
    });
  };

  return (
    <div className="w-full">
      <img
        src={course.thumbnail}
        alt={course.courseName}
        className=" object-cover w-[360px] rounded-2xl "
      ></img>
      <div className="flex flex-col gap-4 mt-3">
        <p className="text-3xl font-semibold text-richblack-5">
          {course.price === 0 ? "FREE" : `Rs. ${course.price}`}
        </p>
        <button
          className=" bg-yellow-50 rounded-md py-2 px-3 font-semibold"
          onClick={
            user && course.studentsEnrolled.includes(user?._id)
              ? () => navigate("/dashboard/enrolled-courses")
              : handleBuyCourse
          }
        >
          {user && course.studentsEnrolled.includes(user?._id)
            ? "Go To Course"
            : course.price < 1
            ? "Free"
            : "Buy Now"}
        </button>
        {!user ||
          (!course?.studentsEnrolled.includes(user?._id) && (
            <button
              className="rounded-md py-2 px-3 font-semibold border border-richblack-700 bg-richblack-800 text-richblack-100"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          ))}
      </div>
      <p className=" text-sm text-richblack-5 text-center mt-5">
        30-Day Money-Back Guarantee
      </p>
      <div>
        <p className="my-2 text-xl font-semibold text-richblack-50">
          This Course Includes :
        </p>
        <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
          {course.instructions.map((item, i) => (
            <p key={i} className="flex items-center gap-3">
              <BsFillCaretRightFill></BsFillCaretRightFill>
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-3">
        <button
          className="flex items-center gap-2 text-yellow-100"
          onClick={handleShare}
        >
          <FaShareSquare></FaShareSquare> Share
        </button>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
