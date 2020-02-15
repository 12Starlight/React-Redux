// withRouter Example
// header.jsx
const Header = ({match}) => (
  UserId: { match.params.userId }
)

// we get access to match inside of Header because of withRouter
export default withRouter(Header)





