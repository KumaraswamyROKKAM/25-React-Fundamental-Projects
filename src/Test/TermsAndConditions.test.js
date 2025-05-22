import {render,screen,fireEvent} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import TermsAndConditions from '../Terms&Conditions/TermsAndConditions';

test('should checkbox be uncheck and button should be disabled',()=>
{
    render(<TermsAndConditions />)

   const checkbox= screen.getByRole('checkbox');
   expect(checkbox).not.toBeChecked();
   const button= screen.getByRole('button');
   expect(button).toBeDisabled();
})

test('should button enable on checkebox checked',async()=>
{
    render(<TermsAndConditions />)

    const checkbox =screen.getByRole('checkbox');
    const user=userEvent.setup();
    await user.click(checkbox);
    const button = screen.getByRole('button');
    expect(button).toBeEnabled();
    
})