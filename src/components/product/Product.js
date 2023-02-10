import "./product.css";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";

const Product = ({ img, title, desc, link, github }) => {
  return (
    <div className="product">
      <div className="img-container">
      <img src={img} alt="" className="product-image" />
      <h2 className="product-title-2">{title}</h2>
      </div>
      <div className="product-buttons">
   
        {/* <WebIcon color="primary" sx={{ fontSize: 30 }}/> */}
        {/* {desc.map((d, i) => <span className="desc" key={i}>{d}</span>)} */}
        <div className="desc-container">
        <span className="product-desc">{desc}</span>
        </div>
        
        <div className="link-container">
          <a className="product-link" href={link} target="_blank" rel="noreferrer">Live Demo</a>
          <a className="product-link" href={github} target="_blank" rel="noreferrer">Github</a>
        </div>
        
        {/* <GitHubIcon color="primary" sx={{ fontSize: 30 }}//> */}
  
      </div>
    </div>
  );
};

export default Product;
