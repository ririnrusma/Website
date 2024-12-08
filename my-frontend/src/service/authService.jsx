const accessTokens = {
    CLIENT: "112638638363",
    ADMIN: "112639938363",
  }
  
  export const getRoleByToken = (token) => {
    switch (token) {
      case accessTokens.CLIENT:
        return "client";
      case accessTokens.ADMIN:
        return "admin";
      default:
        return null;
    }
  }
  
  export const hasRoleAccess = (requiredRoles = [], accessSecret) => 
    {
      if(!accessSecret) return false
      const userRole = getRoleByToken(accessSecret)
      return requiredRoles.includes(userRole)
    }
  
  export default accessTokens