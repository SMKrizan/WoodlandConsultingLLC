import React, { useState } from 'react';
import { FormGroup, Label, Input, Button, Col } from "reactstrap";

const Example = () => {
//   const [purpose, setPurposeType] = useState('radio1');
    const [type, selectType] = useState({radio: ''});
    
// //   const toggle = () => setDropdownOpen(prevState => !prevState);
//     function radioButton (event) {
//         const { name, value } = event.target;
//         selectRadio({
//             [name]: value,
//         })
//     }
    const setRadio = (event) => {
        selectType({radio: event.target.value})
        console.log(event.target.value)
    }


// function handleOptionChange (event) {
        // const { value } = event.target;
//         setPurposeType({
//             value,
//         })
//     }
    // function handleChange(event) {
    //     const { name, value } = event.target;
    //     console.log('CHANGE', value);

    //     setNewOwnerInfo({
    //         ...newOwnerInfo,
    //         [name]: value,
    //     });
    // }

  return (
      <div onChange={setRadio}>
        <FormGroup check >
            <Label check>
              <Input 
              type="radio" 
              name="radio" 
              value='Ask a question'
            //   checked={radio ==="radio1"}
            // {...selectRadio}
                // onChange={() => selectRadio}
              /> Ask a Question
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio"
                value='Leave a comment'
                // checked={radio ==='radio2'}
                // {...selectRadio}
                // onChange= {() => selectRadio}
              />
              Leave a comment
            </Label>
          </FormGroup>
         <FormGroup check>
            <Label check>
              <Input type="radio" name="radio" 
              value="Request a quote"
            //   checked={radio ==='radio3'}
            //   {...selectRadio}
            //   onChange= {handleOptionChange}
              /> Request a quote
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio" 
              value="Provide a testimonial"
            //   checked={radio ==='radio4'}
            //   {...selectRadio}
            //   onChange={handleOptionChange}
              /> Provide a testimonial
            </Label>
          </FormGroup>
        </div>
  )
};
export default Example;

// import React, { useState } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// const Example = (props) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(prevState => !prevState);

//   return (
//     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle caret>
//         Dropdown
//       </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem header>Header</DropdownItem>
//         <DropdownItem>Some Action</DropdownItem>
//         <DropdownItem text>Dropdown Item Text</DropdownItem>
//         <DropdownItem disabled>Action (disabled)</DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem>Foo Action</DropdownItem>
//         <DropdownItem>Bar Action</DropdownItem>
//         <DropdownItem>Quo Action</DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }

// export default Example;