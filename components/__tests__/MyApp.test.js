import { fireEvent, render } from '@testing-library/react-native';
import MyApp from '../MyApp'; 

// Fire Events, Matchers and Component Tests// 

describe("examples", () => {
    it("get text value from text element", () => {

        const { getByTestId} = render(<MyApp/>)
        const textElement = getByTestId("testId"); 

        console.log(textElement.props.children);
        expect(textElement.props.children).toBe("MyApp")

    });

    it("should be increment (with fire event)", ()=>{
        const {getByRole, getByTestId} = render(<MyApp></MyApp>)

        const btnIncrement = getByRole("button", {name:"increment"})
        const textValue = getByTestId("value")
        //console.log(textValue.props.children)

        expect(textValue.props.children[1]).toEqual(0)
        //console.log(textValue.props.children)

        fireEvent.press(btnIncrement)
        expect(textValue.props.children[1]).toBe(1)
    });

    it("counter example", ()=>{
        const {getByRole, getByTestId} = render(<MyApp></MyApp>)

        const value = getByTestId("value")

        const btnIncrement = getByRole("button", {name:'increment'})
        const btnDecrement = getByRole("button", {name:'decrement'})
        const btnReset = getByRole("button", {name:'reset'})

        console.log(value.props.children[1])

        fireEvent.press(btnIncrement)
        expect(value.props.children[1]).toEqual(1)
        
        fireEvent.press(btnIncrement)
        expect(value.props.children[1]).toEqual(2)

        fireEvent.press(btnDecrement)
        expect(value.props.children[1]).toEqual(1)

        fireEvent.press(btnReset)
        expect(value.props.children[1]).toEqual(0)

    });

    it(" changing textInput value ", ()=>{
        const {getByPlaceholderText} = render(<MyApp/>)

        const textInput = getByPlaceholderText(/Enter Text/i)
        //console.log(textInput.props)

        fireEvent.changeText(textInput,"Hello")
        expect(textInput.props.value).toBe("Hello")
    });

    it("will text value change when inputText value changed", ()=>{
        const {getByTestId, getByPlaceholderText} = render(<MyApp/>)

        const text = getByTestId("inputText")
        const input = getByPlaceholderText(/Enter Text/i)

        //expect(input).toBeTruthy() // check is there have input in react component?

        //console.log(text.props.children[1])
        //console.log(input.props.value)
        
        expect(text.props.children[1]).toEqual('') // before change text

        fireEvent.changeText(input, "Text changed") // text changed
        
        expect(text.props.children[1]).toEqual("Text changed") // checking text value

    })

    it("onPressItem is called when pressed", ()=>{
        const onItemPressed = jest.fn()

        const {getByRole} = render(<MyApp onItemPressed={onItemPressed} />)

        const btn = getByRole("button", {name: "onItemPress"})
        //expect(btn).toBeDefined(); 
        fireEvent.press(btn)
        //console.log(btn.props)
        expect(onItemPressed).toHaveBeenCalledTimes(1)
    })

});
