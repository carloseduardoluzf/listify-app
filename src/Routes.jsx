import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import ListItems from './pages/ListItems';
import NewList from './pages/NewList';
import EditList from './pages/EditList';


export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list/:id" component={ListItems} />
            <Route exact path="/newList" component={NewList} />
            <Route exact path="/editList/:id" component={EditList} />
        </Switch>
    )

}