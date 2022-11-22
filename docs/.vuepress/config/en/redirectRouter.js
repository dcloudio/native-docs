const routerMap = {
  // ... todo something
}

export default ({ fullPath, path, hash }) => {
  fullPath = decodeURIComponent(fullPath)
  const matchFullPath = routerMap[fullPath.replace('?id=', '#').replace('.html', '')];
  if (matchFullPath) {
    return {
      path: matchFullPath,
      replace: true
    }
  }

  const matchPath = routerMap[path]
  if (matchPath) {
    return {
      path: matchPath,
      hash,
      replace: true
    }
  }

  if (path.indexOf('/app-') === 0 || path.indexOf('/android-') === 0 || path.indexOf('/ios-') === 0) {
    return {
      path: `/tutorial${path}`,
      hash,
      replace: true
    }
  }
}