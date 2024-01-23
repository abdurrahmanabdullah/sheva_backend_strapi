'use strict';

/**
 * `landing-page-populate` middleware
 */
const populate={


  hero:{
  populate:{
  image:{
  populate:true,fields:["name","url"]
  }
  }
  },
  
  program:{
  populate:{
  
  name:{
  populate:true,
  },
  description:{
  populate:true,
  },
  image:{
  populate:true,fields:["name","url"]
  }
  },
  },
  
  fact:{
  populate:{
  name:{populate:true,},
  content:{
  populate:true,
  },
  }
  },
  
  Foundation:{
  populate:{
  name:{
  populate:true,
  },
  description:{
  populate:true,
  },
  image:{
  populate:true,fields:["name","url"]
  }
  }
  },
  
  
  partner:{
  populate:{
  name:{
  populate:true,
  },
  card:{
  populate:true,
  },
  image:{
  populate:true,fields:["name","url"]
  }
  }
  }
  };
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
ctx.query={populate,...ctx.query,}
    await next();
  };
};
