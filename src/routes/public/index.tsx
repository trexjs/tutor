import { BrowserRouter } from "react-router-dom";
import { TutorPage } from "@/pages/tutor";
import { WinsonPage } from "@/pages/winson";
import { StudioPage } from "@/pages/studio";
import { ZenPage } from "@/pages/zen";
import { XloxPage } from "@/pages/xlox";

import {
  studioCondition,
  schoolCondition,
  schoolNotFound,
  schoolSearchPage,
  siteCondition,
  tutorCondition,
  tutorNotFound,
  tutorSearchPage,
  zenCondition,
  blogCondition,
  recruitCondition,
  ccNotFound,
  ccSearchPage,
  ccCondition,
} from "../route-map";

// Serch app
import { SearchPage } from "@/modules/search";
import NotFound from "@/modules/search/components/not-found";
import { NotFoundPage } from "@/pages/errors/error-page";
import BlogModule from "@/modules/blog";
import RecruitModule from "@/modules/recruit";
import { CCModule } from "@/modules/coaching-center";

export default function PublicRouter() {
  const getTemplate = () => {
    // school not found page
    if (schoolNotFound) {
      return <NotFound term="School" />;
    } else if (schoolCondition) {
      return <WinsonPage />;
      // Search school page
    } else if (schoolSearchPage) {
      return (
        <>
          <SearchPage term="school" />
        </>
      );
    } else if (tutorNotFound) {
      return <NotFound term="Tutor" />;
      // Search tutor page
    } else if (tutorSearchPage) {
      return <SearchPage term="tutor" />;
    } else if (tutorCondition) {
      return <TutorPage />;
    } else if (ccNotFound) {
      return <NotFound term="Coaching Class" />;
      // Search tutor page
    } else if (ccSearchPage) {
      return <SearchPage term="Coaching Class" />;
    } else if (ccCondition) {
      return <CCModule />;
    } else if (siteCondition) {
      return <XloxPage />;
    } else if (zenCondition) {
      return <ZenPage />;
    } else if (blogCondition) {
      return <BlogModule />;
    } else if (recruitCondition) {
      return <RecruitModule />;
    }
    // Show studio app for xlox platform
    else if (studioCondition) {
      return <StudioPage />;
    } else {
      return <NotFoundPage />;
    }
  };
  return (
    <>
      <BrowserRouter>{getTemplate()}</BrowserRouter>
    </>
  );
}
