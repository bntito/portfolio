import { useState } from "react"

export const useFetch = (url) => {
  const [dataServer, setDataServer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url, method = 'GET', formData = null) => {
    setIsLoading(true);
    try {
      let options = null;
      options = {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: formData ? JSON.stringify(formData) : null
      };
      const response = await fetch(url, options);
      const responseData = await response.json();
      const result = {
        status: response.status,
        dataServerResult: await responseData
      };
      setDataServer(result);
      return result;
    } catch (err) {
      if (err.name !== 'AbortError') {
        const data = {
          status: 500,
          message: 'No se pudo establecer conexión con el servidor',
          success: false,
          errorSystem: await err.message,
        };
        setDataServer(data);
      }
    } finally {
      setIsLoading(false);
    };
  };

  const createData = async (url, formData) => {
    console.log(formData)
    const resp = await fetchData(url, 'POST', formData);
    return resp;
  };

  return {
    dataServer,
    isLoading,
    createData
  };
}