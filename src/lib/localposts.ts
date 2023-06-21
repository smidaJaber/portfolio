import fsPromises from 'fs/promises';
import path from 'path'

export function convertToSlug(Text:string) {
  return Text.toLowerCase()
             .replace(/[^\w ]+/g, '')
             .replace(/ +/g, '-');
}
export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'src/json/posts.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath,'utf8');
  // Parse data as json
  const objectData = JSON.parse(jsonData);
  var array = [];
for(var key in objectData){
    if(!objectData.hasOwnProperty(key)){
        continue;
    }
    objectData[key].slug = convertToSlug(objectData[key].title) 
        array.push(key, objectData[key])
     
}

  return objectData
}

export async function getAllPostIds() {
  const objectData = await getLocalData();
var array = [];
for(var key in objectData){
    if(!objectData.hasOwnProperty(key)){
        continue;
    } 
        array.push(convertToSlug(objectData[key].title))
     
}
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return array.map((slug) => {
    return {
      params: {
        id: slug,
      },
    };
  }); 
}

export async function getPostData(id:string) { 
   const allposts = await getLocalData()
   let data ={}
   for(var key in allposts){
    if(!allposts.hasOwnProperty(key)){
        continue;
    } 
    if(allposts[key].slug == id){
      data = allposts[key]
    }
     
     
}
  return {
    id,
    ...data,
  };
}
