import React, { useState } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import '../styles/comps/PersonReasonOKRExame.scss';
// import '../../styles/TeamOKRExam/PersonReasonOKRExame.scss';
import classnames from 'classnames';
import { Progress, Input, Button } from 'antd';
import { LeftOutlined, UpOutlined, RightOutlined, FlagOutlined } from '@ant-design/icons';

function PersonReasonOKRExame() {
  const history = useHistory();
  const { type } = useParams();
  const location = useLocation();
  console.log('type:考核或者详情', type);
  console.log('location:', location);
  console.log('useParams():', useParams());
  console.log('history:', history);
  const [isExpandKR, setIsExpandKR] = useState(false);
  const [isExpandAll, setIsExpandKRAll] = useState(false);

  const expandKR = () => {
    setIsExpandKR(!isExpandKR);
  };
  const expandAll = () => {
    console.log('66');
    setIsExpandKRAll(!isExpandAll);
  };

  const jumpToPanoramicView = () => {
    history.push('/home/PanoramicView');
  };
  const jumpToPersonYearKRDetail = () => {
    history.push('/PersonYearKRDetail');
  };
  return (
    <div className="PersonReasonKRDetailWrap">
      <div className="topNav">
        <div>
          <LeftOutlined onClick={jumpToPanoramicView} />
          <span className="title">王伟 OKR考核 - 第一季度</span>
        </div>
      </div>

      {/* 每一个大O的所有内容**起点  */}
      <div className="yearRelative">
        <div className="title">
          <div className="subtitle_55">
            <span className="subtitle_third">
              <FlagOutlined />
            </span>
            <span className="subtitle_third_O">O1:</span>
            配合智慧协同平台建设完成测试环境可视化展示
          </div>
          <div className=" yearKRTop">权重:50%</div>
          <div className=" finishTop">完成度:56%</div>
          <div className=" adminTop" onClick={expandAll}>
            {isExpandAll ? <RightOutlined /> : <UpOutlined />}
          </div>
        </div>

        <div className="content">
          <div className="subtitle_55 mr_third">
            <div className="small_fas_15">中心目标：实施平台化战略</div>
            <div className="small_fas_15">团队O1：配合智慧协同平台建设完成测试环境可视化展示</div>
          </div>
          <div className="yearKRTop"></div>
          <div className="finishTop small_finish_15"></div>
          <div className="adminTop small_ad_15"></div>
        </div>

        {/* 每一个KR reasonKRExameDetailClaWrapHide */}
        <div
          className={classnames({
            reasonKRExameDetailClaWrap: true,
            reasonKRExameDetailClaWrapHide: isExpandAll,
          })}
        >
          {/* KR 二级标题 不可收缩 */}
          <div className="title">
            <div className="subtitle_55" onClick={jumpToPersonYearKRDetail}>
              <span className="subtitle_third"></span>
              <span className="subtitle_third_O">KR2:</span>
              配合智慧协同平台建设完成测试环境可视化展示
            </div>
            <div className=" yearKRTop">20%</div>
            <div className=" finishTop">
              <Progress percent={30} />
            </div>
            <div className=" adminTop"></div>
          </div>

          {/* KR 二级标题的小内容 不可收缩 */}
          <div className="contentKR">
            <div className="subtitle_55 mr_third">
              <div className="small_fas_15">团队KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
            </div>
            <div className="yearKRTop"></div>
            <div className="finishTop small_finish_15"></div>
            <div className="adminTop small_ad_15"></div>
          </div>

          <div className="eachReasonKRWrap">
            {/* 季度标题 */}
            <div className="reasonTitle">
              <div className="headTwo">
                <span className="blueDot"></span>
                <span className="headThreee">第一季度KR</span>
                <span className="arrow" onClick={expandKR}>
                  {isExpandKR ? <UpOutlined /> : <RightOutlined />}
                </span>
              </div>
              <div className="reasonWeight">季度权重:100%</div>
              <div className="reasonFinish">完成度:60%</div>
              <div className="action"></div>
            </div>
            {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
            <div className={classnames({ reasonContentShow: true, reasonContentHide: isExpandKR })}>
              {/* 每一个KR*/}
              <div className="KRContentWrap">
                <div className="KR">
                  <div>
                    <span className="innerTitle">KR1：</span>
                    完成方案设计及实施计划制定
                  </div>
                  <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                </div>
                <div className="small_15">50%</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">
                  <div className="posiRankWrap">
                    {type === 'exame' ? (
                      <div className="examInput">
                        <Input className="fen"></Input>
                        <div className="tip">(0-100分)</div>
                      </div>
                    ) : (
                      <div>
                        <div className="detail">96%</div>
                      </div>
                    )}

                    <div
                      className={classnames({
                        posiRankDetail: type === 'detail',
                        posiRank: type === 'exame',
                      })}
                    >
                      第一级
                    </div>
                  </div>
                </div>
              </div>

              {/* 每一个KR*/}
              <div className="KRContentWrap">
                <div className="KR">
                  <div>
                    <span className="innerTitle">KR1：</span>
                    完成方案设计及实施计划制定
                  </div>
                  <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                </div>
                <div className="small_15">50%</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">
                  <div className="posiRankWrap">
                    {type === 'exame' ? (
                      <div className="examInput">
                        <Input className="fen"></Input>
                        <div className="tip">(0-100分)</div>
                      </div>
                    ) : (
                      <div>
                        <div className="detail">96%</div>
                      </div>
                    )}

                    <div
                      className={classnames({
                        posiRankDetail: type === 'detail',
                        posiRank: type === 'exame',
                      })}
                    >
                      第一级
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 以上为完整一个KR季度的 */}
          {/* 以上为完整一个KR季度的 */}

          {/* KR 二级标题 不可收缩 */}
          <div className="title">
            <div className="subtitle_55">
              <span className="subtitle_third"></span>
              <span className="subtitle_third_O">KR12:</span>
              配合智慧协同平台建设完成测试环境可视化展示
            </div>
            <div className=" yearKRTop">20%</div>
            <div className=" finishTop">
              <Progress percent={30} />
            </div>
            <div className=" adminTop"></div>
          </div>

          {/* KR 二级标题的小内容 不可收缩 */}
          <div className="contentKR">
            <div className="subtitle_55 mr_third">
              <div className="small_fas_15">团队KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
            </div>
            <div className="yearKRTop"></div>
            <div className="finishTop small_finish_15"></div>
            <div className="adminTop small_ad_15"></div>
          </div>

          <div className="eachReasonKRWrap">
            {/* 季度标题 */}
            <div className="reasonTitle">
              <div className="headTwo">
                <span className="blueDot"></span>
                <span className="headThreee">第一季度KR</span>
                <span className="arrow" onClick={expandKR}>
                  {isExpandKR ? <UpOutlined /> : <RightOutlined />}
                </span>
              </div>
              <div className="reasonWeight">季度权重:100%</div>
              <div className="reasonFinish">完成度:60%</div>
              <div className="action"></div>
            </div>
            {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
            <div className={classnames({ reasonContentShow: true, reasonContentHide: isExpandKR })}>
              {/* 每一个KR*/}
              <div className="KRContentWrap">
                <div className="KR">
                  <div>
                    <span className="innerTitle">KR1：</span>
                    完成方案设计及实施计划制定
                  </div>
                  <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                </div>
                <div className="small_15">50%</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">
                  <div className="posiRankWrap">
                    {type === 'exame' ? (
                      <div className="examInput">
                        <Input className="fen"></Input>
                        <div className="tip">(0-100分)</div>
                      </div>
                    ) : (
                      <div>
                        <div className="detail">96%</div>
                      </div>
                    )}

                    <div
                      className={classnames({
                        posiRankDetail: type === 'detail',
                        posiRank: type === 'exame',
                      })}
                    >
                      第一级
                    </div>
                  </div>
                </div>
              </div>

              {/* 每一个KR*/}
              <div className="KRContentWrap">
                <div className="KR">
                  <div>
                    <span className="innerTitle">KR1：</span>
                    完成方案设计及实施计划制定
                  </div>
                  <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                </div>
                <div className="small_15">50%</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">
                  <div className="posiRankWrap">
                    {type === 'exame' ? (
                      <div className="examInput">
                        <Input className="fen"></Input>
                        <div className="tip">(0-100分)</div>
                      </div>
                    ) : (
                      <div>
                        <div className="detail">96%</div>
                      </div>
                    )}

                    <div
                      className={classnames({
                        posiRankDetail: type === 'detail',
                        posiRank: type === 'exame',
                      })}
                    >
                      第一级
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 以上为完整一个KR季度的 */}
          {/* 以上为完整一个KR季度的 */}
        </div>
      </div>
      {/* 每一个大O的所有内容**终点  */}
      {/* 每一个大O的所有内容**终点  */}

      {/* 每一个大O的所有内容**起点  */}
      <div className="yearRelative">
        <div className="title">
          <div className="subtitle_55">
            <span className="subtitle_third">
              <FlagOutlined />
            </span>
            <span className="subtitle_third_O">O2:</span>
            配合智慧协同平台建设完成测试环境可视化展示
          </div>
          <div className=" yearKRTop">权重:50%</div>
          <div className=" finishTop">完成度:56%</div>
          <div className=" adminTop" onClick={expandAll}>
            {isExpandAll ? <RightOutlined /> : <UpOutlined />}
          </div>
        </div>

        <div className="content">
          <div className="subtitle_55 mr_third">
            <div className="small_fas_15">中心目标：实施平台化战略</div>
            <div className="small_fas_15">团队O1：配合智慧协同平台建设完成测试环境可视化展示</div>
          </div>
          <div className="yearKRTop"></div>
          <div className="finishTop small_finish_15"></div>
          <div className="adminTop small_ad_15"></div>
        </div>

        {/* 每一个KR reasonKRExameDetailClaWrapHide */}
        <div
          className={classnames({
            reasonKRExameDetailClaWrap: true,
            reasonKRExameDetailClaWrapHide: isExpandAll,
          })}
        >
          {/* KR 二级标题 不可收缩 */}
          <div className="title">
            <div className="subtitle_55">
              <span className="subtitle_third"></span>
              <span className="subtitle_third_O">KR12:</span>
              配合智慧协同平台建设完成测试环境可视化展示
            </div>
            <div className=" yearKRTop">20%</div>
            <div className=" finishTop">
              <Progress percent={30} />
            </div>
            <div className=" adminTop"></div>
          </div>

          {/* KR 二级标题的小内容 不可收缩 */}
          <div className="contentKR">
            <div className="subtitle_55 mr_third">
              <div className="small_fas_15">团队KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
            </div>
            <div className="yearKRTop"></div>
            <div className="finishTop small_finish_15"></div>
            <div className="adminTop small_ad_15"></div>
          </div>

          <div className="eachReasonKRWrap">
            {/* 季度标题 */}
            <div className="reasonTitle">
              <div className="headTwo">
                <span className="blueDot"></span>
                <span className="headThreee">第一季度KR</span>
                <span className="arrow" onClick={expandKR}>
                  {isExpandKR ? <UpOutlined /> : <RightOutlined />}
                </span>
              </div>
              <div className="reasonWeight">季度权重:100%</div>
              <div className="reasonFinish">完成度:60%</div>
              <div className="action"></div>
            </div>
            {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
            <div className={classnames({ reasonContentShow: true, reasonContentHide: isExpandKR })}>
              {/* 每一个KR*/}
              <div className="KRContentWrap">
                <div className="KR">
                  <div>
                    <span className="innerTitle">KR1：</span>
                    完成方案设计及实施计划制定
                  </div>
                  <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                </div>
                <div className="small_15">50%</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">
                  <div className="posiRankWrap">
                    {type === 'exame' ? (
                      <div className="examInput">
                        <Input className="fen"></Input>
                        <div className="tip">(0-100分)</div>
                      </div>
                    ) : (
                      <div>
                        <div className="detail">96%</div>
                      </div>
                    )}

                    <div
                      className={classnames({
                        posiRankDetail: type === 'detail',
                        posiRank: type === 'exame',
                      })}
                    >
                      第一级
                    </div>
                  </div>
                </div>
              </div>

              {/* 每一个KR*/}
              <div className="KRContentWrap">
                <div className="KR">
                  <div>
                    <span className="innerTitle">KR1：</span>
                    完成方案设计及实施计划制定
                  </div>
                  <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                </div>
                <div className="small_15">50%</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">
                  <div className="posiRankWrap">
                    {type === 'exame' ? (
                      <div className="examInput">
                        <Input className="fen"></Input>
                        <div className="tip">(0-100分)</div>
                      </div>
                    ) : (
                      <div>
                        <div className="detail">96%</div>
                      </div>
                    )}

                    <div
                      className={classnames({
                        posiRankDetail: type === 'detail',
                        posiRank: type === 'exame',
                      })}
                    >
                      第一级
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 以上为完整一个KR季度的 */}
          {/* 以上为完整一个KR季度的 */}

          {/* KR 二级标题 不可收缩 */}
          <div className="title">
            <div className="subtitle_55">
              <span className="subtitle_third"></span>
              <span className="subtitle_third_O">KR12:</span>
              配合智慧协同平台建设完成测试环境可视化展示
            </div>
            <div className=" yearKRTop">20%</div>
            <div className=" finishTop">
              <Progress percent={30} />
            </div>
            <div className=" adminTop"></div>
          </div>

          {/* KR 二级标题的小内容 不可收缩 */}
          <div className="contentKR">
            <div className="subtitle_55 mr_third">
              <div className="small_fas_15">团队KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
            </div>
            <div className="yearKRTop"></div>
            <div className="finishTop small_finish_15"></div>
            <div className="adminTop small_ad_15"></div>
          </div>

          <div className="eachReasonKRWrap">
            {/* 季度标题 */}
            <div className="reasonTitle">
              <div className="headTwo">
                <span className="blueDot"></span>
                <span className="headThreee">第一季度KR</span>
                <span className="arrow" onClick={expandKR}>
                  {isExpandKR ? <UpOutlined /> : <RightOutlined />}
                </span>
              </div>
              <div className="reasonWeight">季度权重:100%</div>
              <div className="reasonFinish">完成度:60%</div>
              <div className="action"></div>
            </div>
            {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
            <div className={classnames({ reasonContentShow: true, reasonContentHide: isExpandKR })}>
              {/* 每一个KR*/}
              <div className="KRContentWrap">
                <div className="KR">
                  <div>
                    <span className="innerTitle">KR1：</span>
                    完成方案设计及实施计划制定
                  </div>
                  <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                </div>
                <div className="small_15">50%</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">
                  <div className="posiRankWrap">
                    {type === 'exame' ? (
                      <div className="examInput">
                        <Input className="fen"></Input>
                        <div className="tip">(0-100分)</div>
                      </div>
                    ) : (
                      <div>
                        <div className="detail">96%</div>
                      </div>
                    )}

                    <div
                      className={classnames({
                        posiRankDetail: type === 'detail',
                        posiRank: type === 'exame',
                      })}
                    >
                      第一级
                    </div>
                  </div>
                </div>
              </div>

              {/* 每一个KR*/}
              <div className="KRContentWrap">
                <div className="KR">
                  <div>
                    <span className="innerTitle">KR1：</span>
                    完成方案设计及实施计划制定
                  </div>
                  <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                </div>
                <div className="small_15">50%</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">
                  <div className="posiRankWrap">
                    {type === 'exame' ? (
                      <div className="examInput">
                        <Input className="fen"></Input>
                        <div className="tip">(0-100分)</div>
                      </div>
                    ) : (
                      <div>
                        <div className="detail">96%</div>
                      </div>
                    )}

                    <div
                      className={classnames({
                        posiRankDetail: type === 'detail',
                        posiRank: type === 'exame',
                      })}
                    >
                      第一级
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 以上为完整一个KR季度的 */}
          {/* 以上为完整一个KR季度的 */}
        </div>
      </div>
      {/* 每一个大O的所有内容**终点  */}
      {/* 每一个大O的所有内容**终点  */}

      {type === 'exame' ? (
        <div className="exameBtnWrap">
          <Button type="primary">考核完成</Button>
        </div>
      ) : null}
    </div>
  );
}

export default PersonReasonOKRExame;
