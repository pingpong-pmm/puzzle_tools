
import { PageMakeExport } from "../../../page_components/BookExporter";

export const getServerSideProps =
  async function getServerSideProps({ req, resolvedUrl, query }) {


    return {
      props: {

        query: query,
      },
    };
  }


export default PageMakeExport;
