import { FC } from "react";
import Card, { CardVariant } from './components/Card'


interface AppProps {
  
}
 
const App: FC<AppProps> = () => {
  return ( 
    <div>
      <Card width="50%" height="50px" variant={CardVariant.primary} >
        <button>ок</button>
      </Card>
    </div>
  );
}
 
export default App;