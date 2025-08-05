import BlogMainHero from "../../components/BlogMain/BlogMainHero";
import FaqSection from "../../components/BlogMain/FaqSection";


function Blogs(){
    return (
        <div style={{ width: '100%', padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <BlogMainHero/>
            <FaqSection/>
        </div>
    );
}
export default Blogs;