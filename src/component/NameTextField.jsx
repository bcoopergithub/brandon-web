import React, {useState,useEffect} from 'react';

const NameTextField = ({validNames,validate_name}) => {
    const [textName, enter_name] = useState('');
    const is_valid = validNames.includes(textName.toLowerCase())
    useEffect(() => {
        validate_name(is_valid);
      }, [is_valid]);

    return <input
                className="w-full my-1 rounded-lg"
                type="text"
                name="dad_name"
                id="dad_name"
                value={is_valid ? textName + ' is ' + 'Correct!' : textName}
                onChange={(e) => {enter_name(e.target.value)}}
          />

}

export default NameTextField