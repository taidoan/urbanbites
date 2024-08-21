import type { Metadata } from "next";
import {h, c} from './styles'
import Carousel from "@/components/Carousel";
import { firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage } from "./carousel";

export const metadata: Metadata = {
  title: 'Urban Bites | Menu',
}

const MenusPage = () => {
  return(
    <main>
      <section className="menus__hero">
        <Carousel target="menus__hero" slides={[firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nobis, repudiandae maiores, quos saepe obcaecati quaerat, esse nam quasi accusantium porro perspiciatis non iure autem voluptate debitis hic voluptatibus beatae.
          Nisi, dignissimos exercitationem? Voluptas, suscipit quos, rem est, aliquam odit vero fuga vitae iste nam quas eos! Odio mollitia suscipit quasi, asperiores est facilis eligendi ad perferendis, dolorum inventore aliquid.
          Maxime aut nam molestiae debitis placeat magnam pariatur omnis rem dolores eius sunt reprehenderit expedita quo, ab architecto harum facere nulla amet illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque ex facere ad quae impedit, rerum similique nulla delectus nostrum quasi, repellendus enim? Aliquam enim cupiditate nesciunt delectus ea officia?
          Ratione quisquam laudantium id ut. Accusamus veniam placeat numquam est, mollitia doloribus nemo autem officia corrupti debitis quasi ad dolorem sapiente ea accusantium tenetur sequi ab expedita. In, laborum animi.
          Maxime veniam culpa vel quo. Delectus, iste at excepturi ducimus, commodi quibusdam unde quia, aspernatur fugiat in rem? Repellendus sunt necessitatibus beatae corrupti neque atque, consequatur nisi unde quis voluptas.
          Porro dolore dolorem quae. Earum eaque id, ut provident possimus sed cumque maiores nobis nostrum atque doloremque aperiam, optio corrupti, exercitationem mollitia. Explicabo obcaecati, sunt provident natus assumenda suscipit totam?
          Debitis ipsa voluptas assumenda, sunt nihil ab iste, enim non, reiciendis dolorum magnam! Doloribus amet, obcaecati itaque tempora a excepturi facere distinctio expedita dolorum aperiam delectus facilis quidem, velit minima?
          Aspernatur cumque sunt animi, maxime iusto esse laudantium explicabo mollitia deserunt sint, magni quis, harum quidem velit saepe odit consequatur debitis delectus facere? Pariatur omnis nobis nesciunt officiis accusantium doloremque.
          Provident laborum beatae, maxime reiciendis excepturi tempora ipsa unde nemo aperiam et voluptatibus repudiandae hic nulla explicabo odio nesciunt eos neque? Eos aut, illo obcaecati deleniti nemo maiores magnam nostrum.
        </Carousel>
      </section>
      <section className="menus__filter">
        <div className='content-grid'>
          Menu Filter here
        </div>
      </section>
      <section className="menus__content">
        <div className="content-grid content-grid--inc-border">
          Menu items here
        </div>
      </section>
    </main>
  )
 }
 
 export default MenusPage