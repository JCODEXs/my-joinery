
import { useState, useLayoutEffect, useEffect } from 'preact/hooks';

import ModelInfo from 'components/modelInfo';
import Gallery from './secondGallery';
import moment from 'moment';
export default function FullJasmin() {
  const [pic, setPic] = useState(undefined);
  const [vip, setVip] = useState(undefined);
  const [report, setReport] = useState(undefined);
  const { selected } = useSelected();
  useLayoutEffect(async () => {
    setPic(undefined);
    setVip(undefined);
    setReport(undefined);
  }, [selected]);
  useLayoutEffect(async () => {
    setReport(undefined);
    // alert('new Report');
    try {
      const result = await axios.get('/api/vipShows', {
        params: {
          screenName: model.screenName,
          fromDate: period.startDate,
          toDate: period.endDate,
        },
      });
      setVip(result.data.vip);
      setReport(result.data.report);
      console.log('vip: ', result.data);
    } catch (e) {
      // alert('error');
      console.log('err: ', e);
    }
  }, [period]);
  // let vip;
  const getVip = () => {};
  useEffect(async () => {
    if (report) {
   
    }
  }, [report]);
  {
    /* <pre>{JSON.stringify(modelStories, null, 2)}</pre> */
  }
  return (
    <>
      {model && (
        <div style="max-width:100%;position:relative;display:flex;flex-direction:column;min-height:100%;max-height:100%;overflow:hidden;">
                <div
            style="
          flex:1;
          position:relative;
          overflow:hidden;
		  "
          >
            {pic && (
              <div
                style="margin:0px;backdrop-filter:blur(8px);
		    overflow:hidden;
		    z-index:9;
		    position:absolute;
		    top:0px;
		    left:0;
		    max-width:100%;
		      max-height:100%;
		    display:flex;
		    flex-direction:column;
		    align-items:center;
		    justify-content:center;
		    background:rgba(10,10,10,0.8)"
                onCLick={() => {
                  setPic(null);
                }}
              >
                <div style="display:flex;flex:1;overflow:hidden;border-bottom:3px solid rgb(40,40,40);">
                  <img
                    style="max-height:100%;
			  width:auto;
			  object-fit:contain;
		    border-radius:5px;
		    filter: drop-shadow(0 0 0.5rem : rgba(10,0,10,0.8));
		  "
                    src={pic}
                  />
                </div>
                <Gallery
                  stories={model.stories}
                  action={(e, pic) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPic(pic);
                  }}
                />
              </div>
            )}
            <div
              style="
		    position:absolute;
		    top:0px;
		    left:0px;
		    min-height:100%;
		    max-height:100%;
	      min-width:100%;
	      max-width:100%;
	    background:rgba(100,0,20,0.4);
		    overflow-y:scroll;
		    "
            >
              {/* <Gallery
                  stories={model.stories}
                action={(e, pic) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setPic(pic);
                }}
              /> */}
              <div style="padding:10px;">
                <div
                  style="z-index:7;border: solid 1px rgba(100,100,100,0.6);
filter: drop-shadow(0 0 0.75rem black);
	    backdrop-filter:blur(6px);border-radius:10px;padding:5px;position:sticky;background:rgba(20,10,10,0.7);top:5px;display:flex;flex-wrap:wrap; gap:5px;"
                >
                  {/* <select
                    value={period.period}
                    onChange={(e) => {
                      const found = periods.find(
                        (pd) => pd.period == e.target.value
                      );
                      setPeriod(found);
                    }}
                    style="width:201px;border:solid 2px silver;"
                  >
                    {[...periods]
                      .sort((a, b) => moment(b.period) - moment(a.period))
                      .map((period) => (
                        <option value={period.period}>
                          <div> {period.period}</div>
                        </option>
                      ))}
                  </select> */}
                  <div style="display:flex;flex-wrap:wrap;gap:10px;">
                    <div style="display:flex;gap:10px;">
                      <div style="width:50px;">{`FROM: `} </div>
                      {}
                    </div>

                    <div style="display:flex;gap:10px;">
                      <div style="width:50px;">{`TO: `} </div>
                      {}
                    </div>
                  </div>
                  {/* <div> {JSON.stringify(period, null, 2)}</div> */}
           
                </div>
                {report && false && (
                  <div style="padding:10px;">
                            </div>
                )}
                <div
                  style="
		      overflow:hidden;
border: solid 1px rgba(100,100,100,0.6);
filter: drop-shadow(0 0 0.75rem black);
	    backdrop-filter:blur(6px);
		      border-radius:10px;z-index:0;padding:0px;background:rgba(10,10,10,0.6);backdrop-filter:blur(6px);margin-top:20px;display:flex;flex-wrap:wrap;"
                >
                  <div style="min-width:400px;border-radius:0px;height:400px;flex:1;overflow:hidden;">
                    <div
                      style="z-index:1;width:100%;
height:100%;
			"
                      id="piemoney"
                    />
                  </div>
                  <div
                    style="min-width:400px;
border-radius:0px;
			height:400px;flex:1;overflow:hidden;"
                  >
                    <div style="width:100%;height:100%;" id="pietime" />
                  </div>
                  <div style="min-width:400px;border-radius:0px;height:400px;flex:1;overflow:hidden;">
                    <div
                      style="z-index:1;width:100%;
height:100%;
			"
                      id="piekpi"
                    />
                  </div>
                </div>
              </div>
              <div style="padding:20px;">
                <h1>VIP</h1>
                {vip?.map((vipi) => (
                  <div style="padding:10px;">
                    <div></div>
                    <div></div>
                    <div style="display:flex;gap:10px;">
                      <div>Collected:</div>
                      <div>Goal:</div>
                    </div>
                    <div>{vipi.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
