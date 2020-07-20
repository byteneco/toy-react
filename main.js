
import { ToyReact, Component } from "./ToyReact.js";

class MyComponent extends Component {
    render() {
        return (
            <div>
                <span>hello</span>
                <span>react</span>
                <div>
                    {true}
                    {this.children}
                </div>
            </div>
        ) 
    }
}

let com = <MyComponent name="test">
    <div>ttt</div>
</MyComponent>

ToyReact.render(com, document.body);