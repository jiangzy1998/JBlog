import ArtCard from "@/components/ArtCard";
import Pagination from "@/components/Pagination";


const ArtList:React.FC = () => {
  return (
    <section>
      <ArtCard></ArtCard>
      <Pagination total={5} current={1}></Pagination>
    </section>
    
  )
}

export default ArtList;