import axios from 'axios'


async function fetcher(url: string){
    let res = await axios.get(url);
    if (res.status == 200) {
      return res.data
    }
    return null;
}

export async function UseUser (id: string){
    return await fetcher(`/api/user/${id}`)
  }