"use client"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import ResourceTableContents from "./ResourceTableContents"

interface Params {
  resources?: GameResourceResponse[]
}

export default function ResourceTable({ resources }: Params) {
  return <>{resources?.map((resource) => <ResourceTableContents key={resource.resourceId} resource={resource} />)}</>
}
