interface ChildProps{
    color : string
}
// this way does'nt tell react that we are defining a component so we define like this 
export const Child = (props: ChildProps)=> {
    const {color} : ChildProps = props
 return <div>{color}</div>
};
// this way we will have all those propertes associated with a react component
// example displayName etc
// which one to use totally depends upon whether you want to make use of these extra components
// used this in our project tho
//FC stands for functional component
export const Child2 : React.FC<ChildProps> = (props: ChildProps)=> {
    const {color} : ChildProps = props
 return <div>{color}</div>
};