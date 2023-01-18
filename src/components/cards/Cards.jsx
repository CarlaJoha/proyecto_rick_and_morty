import Card from '../card/Card';
import styleCards from './Cards.module.css';


//COMPONENTE SMART
export default function Cards({ characters, onClose }) {//[{...}, {...}, {...}]
 
   return( 
   <div className={styleCards.container}>
       {
         characters.map(({id, name, species, gender, image}, index) => {
            return  <Card 
               key={index}//también se puede usar id porque el objeto tiene esa propiedad
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={() => onClose(id)}
            />
         })
      }
   </div>
   )
}
//CARDS tiene como props la función onCLOSE y la ejecuta con el ID que pasa como props de CHARACTERS
//para que card pueda usar ciertas las props, primero tengo que declararlas acá
//como el ID para que Card lo use, primero lo creo acá y luego lo uso en Card