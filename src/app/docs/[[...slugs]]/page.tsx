export default function Docs({params}:{
    params : {
        slugs:string[];
    };
}) {

    if(params.slugs?.length === 2){
        return (
            <>
              <center>
                <p>Viewing document for feature {params.slugs[0]} and its concept number {params.slugs[1]}</p>
              </center>
              {/* http://localhost:3000/docs/router/123 */}
            </>
          );
    }
    else if(params.slugs?.length === 1){
        return (
            <>
              <center>
                <p>Viewing document for feature {params.slugs[0]} </p>
              </center>
            </>
          );
    }
    else{
    return (
      <>
        <center>
          <p>Docs Page after using ... in sub folder it will catch all url containing docs in its Url</p>
        </center>
      </>
    );
  }
} 