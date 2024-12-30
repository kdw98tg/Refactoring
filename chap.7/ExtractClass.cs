public class Player : MonoBehaviour
{
    //움직임에 필요한 변수들 ..
    private float moveSpeed = 0f;
    private float moveDamping = 0f;

    //입력관련 변수들
    private bool isMoveLeft;
    private bool isMoveRight;
    private bool isMoveForward;
    private bool isMoveBack;

    private void Update()
    {
        HandleInput();
        Move();
    }
    private void HandleInput()
    {
        isMoveLeft = Input.GetKey(KeyCode.A);
        isMoveRight = Input.GetKey(KeyCode.D);
        isMoveForward = Input.GetKey(KeyCode.W);
        isMoveBack = Input.GetKey(KeyCode.S);
    }
    private void Move()
    {
        if (Input.GetKeyDown(KeyCode.A))
        {
            MoveLeft();
        }
        if (Input.GetKeyDown(KeyCode.S))
        {
            MoveBack();
        }
        if (Input.GetKeyDown(KeyCode.D))
        {
            MoveRight();
        }
        if (Input.GetKeyDown(KeyCode.W))
        {
            MoveForward();
        }
    }
    private void MoveLeft()
    {
        //왼쪽으로 움지기는 로직
    }
    private void MoveRight()
    {
        //오른쪽으로 움직이는 로직
    }
    private void MoveForward()
    {
        //앞쪽으로 움직이는 로직
    }
    private void MoveBack()
    {
        //뒤로 움직이는 로직
    }
}

///////////////////////////////////////////////////////////////////////////

public class Player : MonoBehaviour
{
    private PlayerMovement playerMovement = null;
    private PlayerInput playerInput = null;

    private void Awake()
    {
        playerMovement = GetComponent<PlayerMovement>();
        playerInput = GetComponent<PlayerInput>();
    }

    private void Awake()
    {
        MovePlayer();
    }

    private void MovePlayer()
    {
        if (playerInput.GetIsMoveBack())
        {
            playerMovement.MoveBack();
        }
        if (playerInput.GetIsMoveForward())
        {
            playerMovement.MoveForward();
        }
        if (playerInput.GetIsMoveLeft())
        {
            playerMovement.MoveLeft();
        }
        if (playerInput.GetIsMoveRight())
        {
            playerMovement.MoveForward();
        }
    }
}

public class PlayerMovement : MonoBehaviour
{
    //움직임에 필요한 변수들 ..
    private float moveSpeed = 0f;
    private float moveDamping = 0f;

    public void MoveLeft()
    {
        //왼쪽으로 움지기는 로직
    }
    public void MoveRight()
    {
        //오른쪽으로 움직이는 로직
    }
    public void MoveForward()
    {
        //앞쪽으로 움직이는 로직
    }
    public void MoveBack()
    {
        //뒤로 움직이는 로직
    }
}

public class PlayerInput : MonoBehaviour
{
    //입력관련 변수들
    private bool isMoveLeft;
    private bool isMoveRight;
    private bool isMoveForward;
    private bool isMoveBack;

    private void Update()
    {
        HandleInput();
    }

    private void HandleInput()
    {
        isMoveLeft = Input.GetKey(KeyCode.A);
        isMoveRight = Input.GetKey(KeyCode.D);
        isMoveForward = Input.GetKey(KeyCode.W);
        isMoveBack = Input.GetKey(KeyCode.S);
    }

    public bool GetIsMoveLeft()
    {
        return isMoveLeft;
    }
    public bool GetIsMoveRight()
    {
        return isMoveRight;
    }
    public bool GetIsMoveForward()
    {
        return isMoveForward;
    }
    public bool GetIsMoveBack()
    {
        return isMoveBack;
    }
}