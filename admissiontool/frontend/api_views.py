from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated


from .services import getContentVerify





class VerifyView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):

        # content = {
        #     'user': str(request.user),
        #     'auth': str(request.auth)
        # }
        token = "samerandomdom token here"
        content = getContentVerify(request,token)

        return Response(content)
