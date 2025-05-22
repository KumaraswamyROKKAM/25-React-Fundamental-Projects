import {render,screen} from '@testing-library/react'
import ShowMoreText from '../ShowMore/ShowMoreText'
import userEvent from '@testing-library/user-event';


test('should render text from props',()=>
{
    const tval="hello";
    render(<ShowMoreText text="hello" />)
    expect(screen.getByText("hello")).toBeInTheDocument();
    const button= screen.getByRole('button');
    expect(button).toBeInTheDocument();
     expect(button).toHaveTextContent("Show More");

})

test("should print only 100 characters",()=>
{
    const text='a'.repeat(160);

    render(<ShowMoreText text={text} />);

    const tempText= text.substring(0,100)+'...';
    expect(screen.getByText(tempText)).toBeInTheDocument();
    const button=screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Show More");
})

test('should render enterie text when user click on show more button ',async () =>
{
    const text = 'a'.repeat(250);
    render(<ShowMoreText text={text} />)

    const button=screen.getByRole('button');
    const user=userEvent.setup();
    await user.click(button);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(button).toHaveTextContent("Show Less")


})

test('should collapse text when i click show less button',async()=>
{
    const text='a'.repeat(200);
    render(<ShowMoreText text={text} />);

    const button = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(button);
    await user.click(button);
    
    expect(button).toHaveTextContent('Show More');
    expect(screen.getByText(text.substring(0,100)+'...')).toBeInTheDocument();


})


