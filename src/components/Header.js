import React from 'react'

function Header ({title, subTitle}) {
    return (
        <h1 className="title">
        {title}
        {/* {title}Todo List  */}
        <span>{subTitle}</span>
        {/* <span>{subTitle}Get things done, one item at a time.</span> */}
      </h1>
    )
}

export default Header