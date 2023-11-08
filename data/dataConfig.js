export default function () {
  const menuTitles = [
    'Home',
    'About Me',
    'Skills',
    'Projects',
    'Contacts',
  ]
  const menu = menuTitles.map((item) => {
    const stringWithoutSpaces = item.replace(/\s/g, "");
    const link = stringWithoutSpaces.toLowerCase()
    return {
      name: item,
      link
    }
  })
  return { menu }
}