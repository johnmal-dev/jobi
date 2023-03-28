import React from 'react'

const UserIcon = ({ user }) => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 font-heading text-3xl font-bold text-black">
      <div className="h-full w-full text-center">
        {user.email[0].toUpperCase()}
      </div>
    </div>
  )
}

export default UserIcon
