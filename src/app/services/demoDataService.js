import axios from 'axios';
import { from } from 'rxjs';

class DemoDataService {
  END_POINT = 'test-data.json';

  fetchDemoData() {
    return from(
      axios.get(this.END_POINT)
        .then(res => res.data)
        .catch(err => {
          throw new Error(err);
        })
    );
  }
}

export default DemoDataService;