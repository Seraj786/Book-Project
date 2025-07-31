import { IconsBook } from "../constant/data";
import bookbeginner1 from "../assets/images/book-beginners.jpg";
import bookbeginner2 from "../assets/images/book-beginners2.jpg";

function IconSection() {
  return (
    <>
      <div className="book-beginners pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="beginners-img text-end">
                <img src={bookbeginner1} />
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="beginners-img">
                <img src={bookbeginner2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="IconSection" data-aos="fade-down">
        <div className="container">
          <div className="row justify-content-center text-center">
            {IconsBook.map((dataaa, index) => (
              <div className="col-lg-2 col-sm-6 col-6">
                <div className="icon-details" key={index}>
                  <img src={dataaa.iconimg} alt="" />
                  <p>{dataaa.iconname}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default IconSection;
