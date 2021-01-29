// 9.3.1 classnames
import classNames from 'classnames';

classNames('one', 'two'); // = 'one two'
classNames('one', { two: true}); // = 'one two'
classNames('one', { two: false }) // ='one'
classNames('one', ['two', 'three']); // = 'one two three'

const myClass = 'hello';
classNames('one', myClass, { myCondition: true }); // = 'one hello myCondition'

const MyComponent = ({ hightlighted, theme }) => (
    // <div className={classNames('MyComponent', { hightlighted }, theme)}>Hello</div>
    <div className={'MyComponent ${theme} ${lightlighted ? 'hightlight' : ''}'}>
);
