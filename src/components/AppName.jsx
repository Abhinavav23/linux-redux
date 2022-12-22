import React from 'react'
import { useSelector } from 'react-redux'

export const AppName = () => {
    const appName = useSelector((state) => state.appName)
    console.log('rendering AppName', appName);
    console.log();
  return (
    <>
        <h2>AppName Comp</h2>
        <h2>{appName}</h2>
    </>
  )
}
