import s from "./styles.module.scss"

type AvatarProps = {
  fullName: string,
}

const getInitials = (name: string): string => {
  const names = name.split(' ');
  if(names.length === 1){
    return names[0].charAt(0).toUpperCase()
  }

  return names.map(name => name.charAt(0).toUpperCase()).join('');
}

const Avatar = ({fullName}: AvatarProps) => {
  const avatarClasses = [s.avatarSalmon, s.avatarBlue, s.avatarGreen, s.avatarPurple, s.avatarYellow, s.avatarPink];
  const randomClass = avatarClasses[Math.floor(Math.random() * avatarClasses.length)];

  const initials = getInitials(fullName);

  return(
    <div className={`${s.avatar} ${randomClass}`}>
      {initials}
    </div>
  )
}

export default Avatar;